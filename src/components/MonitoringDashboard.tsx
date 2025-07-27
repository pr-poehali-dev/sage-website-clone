import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: "up" | "down" | "stable";
  description: string;
  icon: string;
  color: "blue" | "cyan" | "green" | "orange";
}

const MetricCard = ({ title, value, trend, description, icon, color }: MetricCardProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  
  useEffect(() => {
    const numericValue = parseInt(value);
    if (!isNaN(numericValue)) {
      const timer = setTimeout(() => {
        setAnimatedValue(numericValue);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [value]);

  const getTrendIcon = () => {
    switch (trend) {
      case "up": return "TrendingUp";
      case "down": return "TrendingDown";
      default: return "Minus";
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up": return "text-green-400";
      case "down": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case "blue": return "border-tech-blue/30 bg-tech-blue/10";
      case "cyan": return "border-tech-cyan/30 bg-tech-cyan/10";
      case "green": return "border-green-400/30 bg-green-400/10";
      case "orange": return "border-orange-400/30 bg-orange-400/10";
      default: return "border-tech-blue/30 bg-tech-blue/10";
    }
  };

  const getIconColor = () => {
    switch (color) {
      case "blue": return "text-tech-blue";
      case "cyan": return "text-tech-cyan";
      case "green": return "text-green-400";
      case "orange": return "text-orange-400";
      default: return "text-tech-blue";
    }
  };

  return (
    <Card className={`${getColorClasses()} hover-glow hover:scale-105 transition-all duration-300 animate-scale-in`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white">{title}</CardTitle>
        <Icon name={icon} size={20} className={getIconColor()} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white mb-1">
          {animatedValue > 0 ? animatedValue : value}
        </div>
        <div className="flex items-center text-xs text-gray-300">
          <Icon name={getTrendIcon()} size={12} className={`mr-1 ${getTrendColor()}`} />
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default function MonitoringDashboard() {
  const [activeMetrics, setActiveMetrics] = useState([
    { name: "CPU", value: 72, status: "normal" },
    { name: "Memory", value: 84, status: "warning" },
    { name: "Disk I/O", value: 45, status: "normal" },
    { name: "Network", value: 91, status: "critical" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, Math.min(100, metric.value + (Math.random() - 0.5) * 10))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "text-green-400";
      case "warning": return "text-yellow-400";
      case "critical": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "normal": return "bg-green-400";
      case "warning": return "bg-yellow-400";
      case "critical": return "bg-red-400";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Live Monitoring Dashboard</h2>
        <p className="text-gray-300">Мониторинг системы в реальном времени</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Server Uptime"
          value="99.8%"
          trend="up"
          description="+0.2% с прошлого месяца"
          icon="Server"
          color="green"
        />
        <MetricCard
          title="Response Time"
          value="145ms"
          trend="down"
          description="-12ms быстрее"
          icon="Zap"
          color="blue"
        />
        <MetricCard
          title="Active Users"
          value="2,847"
          trend="up"
          description="+15% рост"
          icon="Users"
          color="cyan"
        />
        <MetricCard
          title="Error Rate"
          value="0.02%"
          trend="stable"
          description="В пределах нормы"
          icon="AlertTriangle"
          color="orange"
        />
      </div>

      {/* System Resources */}
      <Card className="bg-tech-dark/60 border-tech-blue/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Icon name="Activity" size={24} className="mr-2 text-tech-cyan" />
            Ресурсы системы
          </CardTitle>
          <CardDescription className="text-gray-300">
            Текущее использование системных ресурсов
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {activeMetrics.map((metric, index) => (
            <div key={metric.name} className="space-y-2 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-white">{metric.name}</span>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline" 
                    className={`${getStatusColor(metric.status)} border-current`}
                  >
                    {metric.value.toFixed(0)}%
                  </Badge>
                  <Icon 
                    name="Activity" 
                    size={16} 
                    className={getStatusColor(metric.status)} 
                  />
                </div>
              </div>
              <div className="relative">
                <Progress 
                  value={metric.value} 
                  className="h-2"
                />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${getProgressColor(metric.status)}`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Alert Dashboard */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-tech-dark/60 border-tech-cyan/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Icon name="Bell" size={20} className="mr-2 text-tech-cyan" />
              Последние уведомления
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3 p-3 bg-green-400/10 border border-green-400/20 rounded-lg">
              <Icon name="CheckCircle" size={16} className="text-green-400 mt-1" />
              <div className="flex-1">
                <p className="text-sm text-white">Backup completed successfully</p>
                <p className="text-xs text-gray-400">2 минуты назад</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-yellow-400/10 border border-yellow-400/20 rounded-lg">
              <Icon name="AlertTriangle" size={16} className="text-yellow-400 mt-1" />
              <div className="flex-1">
                <p className="text-sm text-white">High memory usage detected</p>
                <p className="text-xs text-gray-400">5 минут назад</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-3 bg-blue-400/10 border border-blue-400/20 rounded-lg">
              <Icon name="Info" size={16} className="text-blue-400 mt-1" />
              <div className="flex-1">
                <p className="text-sm text-white">System update available</p>
                <p className="text-xs text-gray-400">1 час назад</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-tech-dark/60 border-tech-blue/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Icon name="Globe" size={20} className="mr-2 text-tech-blue" />
              География пользователей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">🇷🇺 Россия</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-tech-gray/30 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-tech-cyan rounded-full"></div>
                  </div>
                  <span className="text-sm text-white">1,247</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">🇺🇸 США</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-tech-gray/30 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-tech-blue rounded-full"></div>
                  </div>
                  <span className="text-sm text-white">856</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">🇩🇪 Германия</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-tech-gray/30 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-white">432</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">🇬🇧 Великобритания</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-tech-gray/30 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-orange-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-white">312</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}